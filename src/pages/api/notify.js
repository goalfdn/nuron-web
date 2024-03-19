const hubspot = require('@hubspot/api-client');

export default async function handler(req, res) {
  const hubspotClient = new hubspot.Client({ "accessToken": req.body.hapiKey });

  const response = await hubspotClient.crm.contacts.basicApi.create({
    properties: {
      email: req.body.email,
      website: `trynuron.com/${req.body.positioningIndex === 0 ? 'a' : 'b'}`
    }
  })
  res.status(200).json(response);
}