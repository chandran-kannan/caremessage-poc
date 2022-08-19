export async function fetchAppointments() {
  try {
    let headersList = {
      Accept: "*/*"
    };
    let response = await fetch(
      "http://ec2-3-20-239-226.us-east-2.compute.amazonaws.com:3000/api/appointments",
      {
        method: "GET",
        headers: headersList
      }
    );
    let data = await response.json();
    return data;
  } catch (error) {}
}

export async function updateAppointment(appointmentData) {
  let headersList = {
    "Content-Type": "application/json"
  };

  let bodyContent = JSON.stringify(appointmentData);

  let response = await fetch(
    "http://ec2-3-20-239-226.us-east-2.compute.amazonaws.com:3000/api/appointments",
    {
      method: "PUT",
      body: bodyContent,
      headers: headersList
    }
  );

  let data = await response.text();
  console.log(data);
}
export async function deleteAppointment(id) {
  let headersList = {
    Accept: "*/*"
  };

  let response = await fetch(
    `http://ec2-3-20-239-226.us-east-2.compute.amazonaws.com:3000/api/appointments/id=${id}`,
    {
      method: "DELETE",
      headers: headersList
    }
  );

  let data = await response.text();
  console.log(data);
}
