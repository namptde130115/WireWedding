import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Input } from 'antd';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';

export const HomePageCreateBlog = () => {
  const editorRef = useRef(null);
  const [initContent] = useState({
    postHeading: 'Blog Title',
    postBodyContent: '<p>This is the initial content.</p>'
  });
  const [postContent, setPostContent] = useState({
    postHeading: '',
    postBodyContent: ''
  });

  const getContent = () => {
    console.log(postContent);
  };

  const handleEditorChange = (value) => {
    setPostContent({ ...postContent, postBodyContent: value });
  };

  const handleTitleChange = (e) => {
    setPostContent({ ...postContent, postHeading: e.target.value });
  };

  return (
    <div className={clsx(styles.createBlog_container)}>
      <Input
        onChange={handleTitleChange}
        placeholder={initContent.postHeading}
        bordered={false}
      />
      <div className={clsx(styles.createBlog_child)}>
        <Editor
          apiKey='cl0i398qnef0mj3s5d5a1r8syteuq89aj2dzjw9xvcjjlyt5'
          onInit={(evt, editor) => {
            editorRef.current = editor;
          }}
          initialValue={initContent.postBodyContent}
          init={{
            height: 700,
            menubar: true,
            /* enable title field in the Image dialog*/
            image_title: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste image code help wordcount'
            ],
            toolbar:
              'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect ' +
              '| alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist checklist ' +
              '| forecolor backcolor casechange permanentpen formatpainter removeformat | pagebreak | charmap emoticons ' +
              '| fullscreen  preview save print | insertfile image media pageembed template link anchor codesample' +
              '| a11ycheck ltr rtl | showcomments addcomment',
            file_picker_callback: function (cb, value, meta) {
              var input = document.createElement('input');
              input.setAttribute('type', 'file');
              input.setAttribute('accept', 'image/*');
              input.onchange = function () {
                var file = this.files[0];

                var reader = new FileReader();
                reader.onload = function () {
                  var id = 'blobid' + new Date().getTime();
                  var blobCache = editorRef.current.editorUpload.blobCache;
                  var base64 = reader.result.split(',')[1];
                  var blobInfo = blobCache.create(id, file, base64);
                  blobCache.add(blobInfo);

                  /* call the callback and populate the Title field with the file name */
                  cb(blobInfo.blobUri(), { title: file.name });
                };
                reader.readAsDataURL(file);
              };
              input.click();
            },
            content_style:
              "@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap'); body { font-family: 'Lora', serif; font-size:14pt }"
          }}
          onEditorChange={handleEditorChange}
        />
        {/* <button onClick={log}>Log editor content</button> */}
      </div>
      <div className={clsx(styles.button_container)}>
        <ButtonCustom onClick={getContent} type='primary' text='Create' />
        <ButtonCustom type='ghost' text='Cancel' />
      </div>
    </div>
  );
};
