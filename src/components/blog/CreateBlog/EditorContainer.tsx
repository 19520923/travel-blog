import React, { Component } from "react";
import { EditorState, ContentState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

// import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import '../../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css'
// examples in https://github.com/jpuri/react-draft-wysiwyg/tree/master/stories

interface Props {
  onStateChange: (content: string) => void;
}

interface State {
  editorState: EditorState;
  editMode: boolean;
} 

class EditorContainer extends Component<Props, State> {
  private editorRef: React.RefObject<Editor>;
  constructor(props: any) {
    super(props);
    const html = "<p>Hey this <strong>editor</strong> rocks 😀</p>";
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(
        contentBlock.contentBlocks
      );
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
        editMode: true,
      };
    }

    this.editorRef = React.createRef<Editor>();
  }

  focus = () => {
    let editor = this.editorRef.current;
    if (editor) {
      editor.focusEditor();
    }
  };

  componentDidMount = () => {
    console.log("edit Me");
    if (this.state.editMode) {
      this.focus();
    }
  };

  toggleEditMode = () => {
    this.setState({ editMode: !this.state.editMode });
  };

  onEditorStateChange = (editorState: EditorState) => {
    // console.log(editorState)
    this.setState({ 
      editorState,
    });

    this.props.onStateChange(
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
  }; 

  render() {
    const { editorState, editMode } = this.state;
    return (
      <div className="editor">
        <Editor
          editorState={editorState}
          onEditorStateChange={this.onEditorStateChange}
          ref={this.editorRef}
          readOnly={!editMode}
          wrapperClassName="wrapper-class"
          editorClassName="editor-class"
          toolbarClassName="toolbar-class"
          // toolbarHidden={true}
          toolbar={{
            options: [
              "inline",
              "blockType",
              "fontSize",
              "list",
              "textAlign",
              "colorPicker",
              "link",
              "embedded",
              "emoji",
              "image",
              "remove",
              "history",
            ],
            // inline: { inDropdown: true },
            // list: { inDropdown: true },
            // textAlign: { inDropdown: true },
            // link: { inDropdown: true },
            // history: { inDropdown: true },
            // image: {
            //   uploadCallback: uploadImageCallBack,
            //   alt: { present: true, mandatory: true }
            // 
          }
        }
        />
        <textarea
          disabled
          value={
            editorState &&
            draftToHtml(convertToRaw(editorState.getCurrentContent()))
          }
        />
      </div>
    );
  }
}

export default EditorContainer;
