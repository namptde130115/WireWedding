import React, { useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import clsx from 'clsx';
import styles from './index.module.scss';
import { Input, message } from 'antd';
import { ButtonCustom } from '../../../components/ButtonCustom/index.jsx';
import { useDispatch, useSelector } from 'react-redux';
import {
  createBlog,
  editBlog,
  getAllBogsByPerson,
} from '../../../redux/vendorSlice';
import { unwrapResult } from '@reduxjs/toolkit';

export const HomePageCreateBlog = ({ currentBlog, closeModal }) => {
  const userName = localStorage.getItem('userName');
  const [initContent, setInitContent] = useState('');
  const dispatch = useDispatch();
  const editorRef = useRef(null);
  const [title, setTitle] = useState(currentBlog?.title);
  useEffect(() => {
    if (currentBlog) {
      setInitContent(currentBlog.content);
      setTitle(currentBlog.title);
    }
  }, [currentBlog?.content]);

  const handlePostBlog = async () => {
    if (currentBlog) {
      if (editorRef.current) {
        const body = {
          id: currentBlog.id,
          data: {
            blogTitle: title,
            blogContent: editorRef.current.getContent(),
          },
        };
        try {
          const actionResult = await dispatch(editBlog(body));
          const response = unwrapResult(actionResult);
          if (response) {
            dispatch(getAllBogsByPerson());
            message.success('Edit blog success');
          }
        } catch (error) {
          message.error(error.data.message);
        }
      }
    } else {
      if (editorRef.current) {
        const body = {
          blogTitle: title,
          blogContent: editorRef.current.getContent(),
        };
        try {
          const actionResult = await dispatch(createBlog(body));
          const response = unwrapResult(actionResult);
          if (response) {
            dispatch(getAllBogsByPerson());
            message.success('Create blog success');
            closeModal();
          }
        } catch (error) {}
      }
    }
  };
  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };
  return (
    <div className={clsx(styles.createBlog_container)}>
      <Input
        placeholder='Blog Title'
        bordered={false}
        value={title}
        onChange={handleChangeTitle}
      />
      <div className={clsx(styles.createBlog_child)}>
        <Editor
          apiKey='cl0i398qnef0mj3s5d5a1r8syteuq89aj2dzjw9xvcjjlyt5'
          onInit={(evt, editor) => {
            editorRef.current = editor;
          }}
          initialValue={initContent}
          init={{
            height: 700,
            menubar: true,
            /* enable title field in the Image dialog*/
            image_title: true,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste image code help wordcount',
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
              "@import url('https://fonts.googleapis.com/css2?family=Lora:ital@1&display=swap'); body { font-family: 'Lora', serif; font-size:14pt }",
          }}
        />
        {/* <button onClick={log}>Log editor content</button> */}
      </div>
      <div className={clsx(styles.button_container)}>
        <ButtonCustom type='primary' text='Post' onClick={handlePostBlog} />
      </div>
    </div>
  );
};
