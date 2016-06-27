
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Data Knowledge Base for ATLAS Collaboration' });
};