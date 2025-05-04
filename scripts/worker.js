onmessage = async function(e) {
  const { name, databaseURL, token } = e.data;

  const response = await fetch(`${databaseURL}/Users/${name}/hightscore.json?auth=${token}`);
  const highscore = await response.json();
  
  postMessage({ name, highscore });
};
