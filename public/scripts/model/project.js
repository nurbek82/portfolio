var allProjects = [];

function Project (opts) {
  this.title = opts.title;
  this.language = opts.language;
  this.category = opts.category;
  this.gitHubUrl = opts.gitHubUrl;
  this.body = opts.body;
  this.publishedOn = opts.publishedOn;
}
Project.prototype.toHtml = function () {
  var $source = $('#portfolioHandlebar').html();
  var template = Handlebars.compile($source)
  return template(this);
};

$(function(){
  $.ajax({
    url:'/data/data.json',
    dataType:'json',
  }).done(function(data){
    data.map((function (project){
      console.log('request done: ' + Date.now());
      allProjects.push(new Project(project));
    }));
    allProjects.map(function(p) {
      $('#handlebarSection').append(p.toHtml());
    });
    projectView.initIndexPage();
  })
  console.log ('requst started:' + Date.now())
});
