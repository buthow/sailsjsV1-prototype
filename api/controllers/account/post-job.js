module.exports = {


  friendlyName: 'Post Job',


  description: 'Post Job to Database.',


  extendedDescription:
    `This creates a new job record in the database`,


  inputs: {

    jobTitle: {
      required: true,
      type: 'string',
      description: 'Software Engineer',
    },

    jobLocation: {
      required: true,
      type: 'string',
      maxLength: 200,
      example: 'Kuala Lumpur',
      description: 'The Job\'s location.'
    },

    jobDate:  {
      required: true,
      type: 'string',
      example: '1537350262570',
      description: 'The Job\'s date.'
    },

    jobStatus:  {
      required: true,
      type: 'number',
      example: 0,
      description: 'The status to determine if Job is Active',
      extendedDescription: '0: Inactive, 1: Active',

    },

    jobDescription:  {
      required: true,
      type: 'string',
      example: 'lorem ipsum',
      description: 'The Job\'s description',
    }

  },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided params are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
        'parameters should have been validated/coerced _before_ they were sent.'
    }

  },


  fn: async function (inputs, exits) {

    console.log(inputs)

    // Build up data for the new job record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    let newJobRecord = await Job
      .create({
        title: inputs.jobTitle,
        location: inputs.jobLocation,
        date: inputs.jobDate,
        status: parseInt(inputs.jobStatus),
        description: inputs.jobDescription
      })
      .intercept({ name: 'UsageError' }, 'invalid')
      .fetch();

    // Since everything went ok, send our 200 response.
    return exits.success();

  }

};
