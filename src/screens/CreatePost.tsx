
import React, { useState } from "react";
import EditorContainer from "../components/blog/CreateBlog/EditorContainer";
import Input from "../components/Input";
import Textarea from "../components/Textarea";

interface Blog {
  title: string;
  description: string;
  nation: Array<string>;
  tags: Array<string>;
  body: string;
}

const countries = [
  "Vietnam",
  "Antigua",
  "Argentina",
  "Azerbaijan",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
];

const tags = ["Nature", "Wildlife", "Sea"];

type Props = {
  onCLose: () => void
}

const CreatePost = (props:Props) => {
  const [payload, setPayload] = useState<Blog>({
    title: "",
    description: "",
    nation: [],
    tags: [],
    body: "",
  });

  const onTitleChange = (text: string) => {
    setPayload({ ...payload, title: text });
  };

  const onDescriptionChange = (text: string) => {
    setPayload({ ...payload, description: text });
  };

  const onNationEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    text: string
  ) => {
    if (e.key === "Enter") {
      setPayload({ ...payload, nation: [...payload.nation, text] });
    }
  };

  const onNationRemoveClick = (nation: string) => {
    const filteredNation = payload.nation.filter((p) => p !== nation);
    setPayload({ ...payload, nation: filteredNation });
  };

  const onTagsEnter = (
    e: React.KeyboardEvent<HTMLInputElement>,
    text: string
  ) => {
    if (e.key === "Enter") {
      setPayload({ ...payload, tags: [...payload.tags, text] });
    }
  };

  const onTagRemoveClick = (tag: string) => {
    const filteredNation = payload.tags.filter((p) => p !== tag);
    setPayload({ ...payload, tags: filteredNation });
  };

  const onBodyChange = (text: string) => {
    setPayload({ ...payload, body: text });
  };

  const Header = () => {
    return (
      <div className="header flex-between">
        <div className="flex">
          <div
            className="btn-cg circle white s-default flex-center"
            style={{ marginRight: "1rem" }}
            onClick={props.onCLose}
          >
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <h1>Create blog</h1>
        </div>
  
        <div className="btn-cg round background" >
          <span>Post</span>
        </div>
      </div>
    );
  };

  return (
    <div className="createBlogContainer">
      <div className="createBlog">
        <Header/>
        <div className="createBlog__header ">
          <div>
            <Input name="title" type="text" onChange={onTitleChange} />
            <Textarea name="description" onChange={onDescriptionChange} />
          </div>
          <div>
            <Input
              name="nation"
              type="text"
              onKeyDown={onNationEnter}
              suggestion={countries}
            />
            {payload.nation.length > 0 && (
              <ul className="flex" style={{ marginTop: ".5rem" }}>
                {payload.nation.map((n: string) => (
                  <li style={{ marginRight: "0.5rem" }}>
                    <div
                      className="btn-cg round primary"
                      onClick={() => onNationRemoveClick(n)}
                    >
                      <span>{n}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <Input
              name="tags"
              type="text"
              onKeyDown={onTagsEnter}
              suggestion={tags}
            />
            {payload.tags.length > 0 && (
              <ul className="flex" style={{ marginTop: ".5rem" }}>
                {payload.tags.map((t: string) => (
                  <li style={{ marginRight: "0.5rem" }}>
                    <div
                      className="btn-cg round primary"
                      onClick={() => onTagRemoveClick(t)}
                    >
                      <span>{t}</span>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <EditorContainer onStateChange={onBodyChange} />
      </div>
    </div>
  );
};

export default CreatePost;
