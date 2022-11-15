import React, { useEffect } from "react";
import PropTypes from "prop-types";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import { Component } from "react";
import { useState } from "react";
class ColorPic extends Component {
  static propTypes = {
    expanded: PropTypes.bool,
    onExpandEvent: PropTypes.func,
    onChange: PropTypes.func,
    currentState: PropTypes.object,
  };

  stopPropagation = (event) => {
    event.stopPropagation();
  };

  onChange = (color) => {
    const { onChange } = this.props;
    onChange("color", color.hex);
  };

  renderModal = () => {
    const { color } = this.props.currentState;
    return <div onClick={this.stopPropagation}></div>;
  };

  render() {
    const { expanded, onExpandEvent } = this.props;
    return (
      <div
        aria-haspopup="true"
        aria-expanded={expanded}
        aria-label="rdw-color-picker"
      >
        <div onClick={onExpandEvent}></div>
        {expanded ? this.renderModal() : undefined}
      </div>
    );
  }
}

export const EditorCustomizedToolbarOption = ({setValueEditor}) => {
  const [text, setText] = useState(() => EditorState.createEmpty());
useEffect(()=>{
  setValueEditor(text.getCurrentContent().getPlainText())
  
})

// useEffect(() => {
  // const editorState = EditorState.push(text, ContentState.createFromText(''));
  // setText({ editorState });
// }, [clearLength])

  // text.getCurrentContent().getPlainText()


  
  return (
    <Editor
      editorState={text}
      onEditorStateChange={setText}
      toolbarClassName="toolbarClassName border-0 bg-[#FCFCFB] p-2 right relative "
      wrapperClassName="demo-wrapper wrapperClassName min-h-[280px]  border border-[#D9D9D9]  mb-7 right  rtl"
      editorClassName=" min-h-[280px] right p-2 rtl pt-4	"
      toolbar={{
        blockType: {
          inDropdown: true,
          options: [
            "پاراگراف",
            "H1",
            "H2",
            "H3",
            "H4",
            "H5",
            "H6",
            "Blockquote",
            "Code",
          ],
          className: "EDITOR-USERPROFILE hidden",
          component: undefined,
          dropdownClassName: undefined,
        },
        inline: {
          className: "ml-7",
          options: ["bold", "italic", "underline"],
          bold: { className: "focus:text-[#F2F5F7]  rounded-1 w-6 h-6" },
          italic: { className: "focus:text-[#F2F5F7]  rounded-1 w-6 h-6" },
          underline: { className: "focus:text-[#F2F5F7]  rounded-1 w-6 h-6" },
        },
        list: {
          className: " ",
          options: ["unordered", "ordered"],
          unordered: { className: "focus:text-[#F2F5F7]  rounded-1 w-6 h-6" },
          ordered: { className: "focus:text-[#F2F5F7]  rounded-1 w-6 h-6" },
        },
        link: {
          className: "mr-7",
        },
        fontSize: { className: "EDITOR-USERPROFILE hidden" },
        fontFamily: { className: "EDITOR-USERPROFILE hidden" },
        colorPicker: { className: "EDITOR-USERPROFILE hidden" },
        emoji: { className: "EDITOR-USERPROFILE hidden" },
        image: { className: "EDITOR-USERPROFILE hidden" },
        history: { className: "EDITOR-USERPROFILE hidden" },
        embedded: { className: "EDITOR-USERPROFILE hidden" },
        remove: { className: "EDITOR-USERPROFILE hidden" },
        colorPicker: { component: ColorPic },
      }}
    />
  );
};
