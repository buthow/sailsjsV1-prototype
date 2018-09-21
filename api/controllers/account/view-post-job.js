module.exports = {


  friendlyName: 'View post job',


  description: 'Display "Post job" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/account/post-job'
    }

  },


  fn: async function (inputs, exits) {

    // Respond with view.
    return exits.success();

  }


};
