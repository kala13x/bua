const replacements = [
    { search: "გლობალური ომის პარტია", replace: "ბუა" },
    { search: "გლობალურმა ომის პარტიამ", replace: "ბუამ" },
    { search: "გლობალურ ომის პარტიას", replace: "ბუას" },
    { search: "გლობალური ომის პარტიის", replace: "ბუას" },
    { search: "გლობალური ომის პარტიით", replace: "ბუით" },
    { search: "გლობალურ ომის პარტიად", replace: "ბუად" },
    { search: "გლობალურო ომის პარტიავ", replace: "ბუავ" },
    { search: "გლობალურ ომის პარტიაზე", replace: "ბუაზე" }
  ];

  function replaceTextOnPage(replacements) {
    const textNodes = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    let currentNode;
  
    while ((currentNode = textNodes.nextNode())) {
      replacements.forEach(({ search, replace }) => {
        if (currentNode.nodeValue.includes(search)) {
          currentNode.nodeValue = currentNode.nodeValue.replace(new RegExp(search, 'g'), replace);
        }
      });
    }
  }

  // Execute the replacement function
  replaceTextOnPage(replacements);
