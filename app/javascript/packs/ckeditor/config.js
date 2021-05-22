config.extraPlugins = 'video';

config.toolbar_Pure = [
  {name: 'insert', items: [ 'Image','Video']},
]

CKEDITOR.editorConfig = function( config ) {
  config.validateSize = 100;
  config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  config.toolbar_Pure = [
    {name: 'clipboard', items: ['-','Undo','Redo' ]},
    {name: 'tools', items: [ 'Maximize']},
    {name: 'basicstyles', items: [ 'Bold','Italic','Underline','Strike','Subscript','Superscript','-','RemoveFormat' ]},
    {name: 'paragraph', items: [ 'NumberedList','BulletedList','-','Outdent','Indent','-','-','JustifyLeft','JustifyCenter','JustifyRight','JustifyBlock','-','BidiLtr','BidiRtl' ]},
    {name: 'links', items: [ 'Link','Unlink' ]},
    {name: 'styles', items: [ 'Styles','Format','Font','FontSize' ]},
    {name: 'colors', items: [ 'TextColor','BGColor' ]},
    {name: 'insert', items: [ 'Image','Video','Iframe','Audio']},
  ];
  config.toolbar = 'Pure';
  config.toolbar_mini = [
    {name: 'tools', items: [ 'Maximize']},
    {name: 'basicstyles', items: [ 'Bold','Italic','Underline','Strike','Subscript','Superscript']},
    {name: 'paragraph', items: [ 'NumberedList','BulletedList']},
    {name: 'links', items: [ 'Link','Unlink' ]},
    {name: 'styles', items: [ 'Styles','Format','Font','FontSize' ]},
  ];
};
