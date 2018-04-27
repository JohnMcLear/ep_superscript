var eejs = require('ep_etherpad-lite/node/eejs/');
var Changeset = require("ep_etherpad-lite/static/js/Changeset");
exports.eejsBlock_editbarMenuLeft = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_superscript/templates/editbarButtons.ejs");
  return cb();
}

exports.eejsBlock_dd_format = function (hook_name, args, cb) {
  args.content = args.content + eejs.require("ep_superscript/templates/fileMenu.ejs");
  return cb();
}

exports.exportHtmlAdditionalTags = function(hook, pad, cb){
  var padId = pad.id;
  cb(["superscript","sup"]);
};

// line, apool,attribLine,text
exports.getLineHTMLForExport = function (hook, context) {
  if (context.lineContent[0] === '*') {
    context.lineContent = context.lineContent.substring(1);
  }
  context.lineContent = context.lineContent.replace(/<superscript>/i, '<sup>');
  context.lineContent = context.lineContent.replace(/<\/superscript>/i, '</sup>'); 

  return true;
}