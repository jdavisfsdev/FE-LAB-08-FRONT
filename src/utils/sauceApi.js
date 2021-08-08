const URL = 'http://localhost:7890/api/v1/sauces';

export async function getSauces() {
  const response = await fetch(URL);
  return response.json();
}

export async function getSauce(id) {
  const response = await fetch(`${URL}/${id}`);
  return response.json();
}

export async function deleteSauce(id) {
  const response = await fetch(`${URL}/${id}`, {
    method: 'delete'
  });
  return response.json();
}

export async function addSauce(sauce) {
  const response = await fetch(URL, {
    method: 'post',
    body: JSON.stringify(sauce),
    headers: { 'Content-Type': 'application/json' }
  });
  console.log('response', response);
  return response;
}

export async function updateSauce(sauce) {
  const response = await fetch(URL, {
    method: 'put',
    body: JSON.stringify(sauce),
    headers: { 'Content-Type': 'application/json' }
  });
  return response.json();
}

