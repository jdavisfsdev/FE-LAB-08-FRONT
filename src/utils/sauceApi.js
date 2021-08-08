const URL = '/api/v1/sauces';

export async function getSauces() {
  const response = await fetch(URL);
  return response.body;
}

export async function getSauce(id) {
  const response = await fetch(`${URL}/${id}`);
  return response.body;
}

export async function deleteSauce(id) {
  const response = await fetch(`${URL}/${id}`, {
    method: 'delete'
  });
  return response.body;
}

export async function addSauce(sauce) {
  const response = await fetch(URL, {
    method: 'post',
    body: JSON.stringify(sauce),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.body;
}

export async function updateSauce(sauce) {
  const response = await fetch(URL, {
    method: 'put',
    body: JSON.stringify(sauce),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.body;
}

