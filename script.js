function divideRecipe() {
  const originalServings = document.getElementById('originalServings').value;
  const desiredServings = document.getElementById('desiredServings').value;
  const originalRecipe = document.getElementById('originalRecipe').value;

  if (!originalServings || !desiredServings || !originalRecipe) {
      alert("Please fill out all the fields.");
      return;
  }

  const ratio = desiredServings / originalServings;
  let dividedRecipe = '';

  const lines = originalRecipe.split('\n');
  for (const line of lines) {
      const match = line.match(/^(\d*\.?\d+)(.*)$/);
      if (match) {
          const quantity = match[1];
          const restOfLine = match[2];
          dividedRecipe += (quantity * ratio).toFixed(2) + restOfLine + '\n';
      } else {
          dividedRecipe += line + '\n';
      }
  }

  document.getElementById('dividedRecipe').value = dividedRecipe;
}

