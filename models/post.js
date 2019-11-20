'use strict';
module.exports = (sequelize, DataTypes) => {
  const Post = sequelize.define('Post', {  
    from: DataTypes.STRING,   //column called from    Every column has a id
    title: DataTypes.STRING,   //column called title
    full_text: DataTypes.TEXT,   //column called full_text
    media_url: DataTypes.STRING    //column called medial_url 
  }, {
    tableName: 'posts',
    underscored: true
  });
  Post.associate = function(models) {
    // associations can be defined here
  };
  return Post;
};
