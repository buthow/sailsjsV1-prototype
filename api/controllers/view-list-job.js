module.exports = {


  friendlyName: 'View list job',


  description: 'Display "List job" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/list-job'
    }

  },


  fn: async function (inputs, exits) {

    let getJobs = await Job.find({status: 1});
    // Respond with view.
    return exits.success({data: getJobs});

  }


};
