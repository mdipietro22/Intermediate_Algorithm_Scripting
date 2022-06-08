function convertHTML(str) {

return String(str)
        .replace(/&amp;/g, '&')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;');
}

convertHTML("Dolce & Gabbana");