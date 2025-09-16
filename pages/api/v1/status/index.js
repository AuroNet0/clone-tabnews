function status(request, response) {
  response.status(200).json({ text: "Pagina status ok" });
}

export default status;
