    
    document.getElementById('downloadButton').addEventListener('click', function () {
          const fileUrl = 'https://cloudresumechallenge724.blob.core.windows.net/resumefile/Amanpreet Takher Resume_2023-V2.pdf';
          const fileName = 'Aman-Resume.pdf';
  
          // Fetch the file from the URL
          fetch(fileUrl)
              .then(response => response.blob())
              .then(blob => {
                  // Create a new Blob object URL
                  const url = window.URL.createObjectURL(blob);
  
                  // Create a temporary anchor element
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = fileName;
  
                  // Append the anchor to the body
                  document.body.appendChild(a);
  
                  // Trigger the download by simulating a click
                  a.click();
  
                  // Remove the anchor from the body
                  document.body.removeChild(a);
  
                  // Revoke the object URL to free up memory
                  window.URL.revokeObjectURL(url);
              })
              .catch(error => console.error('Error downloading the file:', error));
      });