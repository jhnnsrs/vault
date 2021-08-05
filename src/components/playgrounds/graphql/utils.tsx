


const replacer = (key, value) => value === null ? '' : value // specify how you want to handle null values here

export function exportToCsv(filename, arrayOfJson) {

    console.log(filename, arrayOfJson)
    // convert JSON to CSV
    const header = Object.keys(arrayOfJson[0])
    console.log(header)
    let csv = arrayOfJson.map(row => header.map(fieldName => {
        console.log(fieldName)
        if (fieldName in row) {
            return JSON.stringify(row[fieldName], replacer)
        }
        else return ""
    }
    ).join(','))
    console.log(csv)
    csv.unshift(header.join(','))
    console.log(csv)
    let csvFile = csv.join('\r\n')
    console.log(csvFile)

    var blob = new Blob([csvFile], { type: 'text/csv;charset=utf-8;' });
    if (navigator.msSaveBlob) { // IE 10+
        navigator.msSaveBlob(blob, filename);
    } else {
        var link = document.createElement("a");
        if (link.download !== undefined) { // feature detection
            // Browsers that support HTML5 download attribute
            var url = URL.createObjectURL(blob);
            link.setAttribute("href", url);
            link.setAttribute("download", filename);
            link.style.visibility = 'hidden';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    }
}


export function flatten(data) {
    var result = {};

    function recurse (cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        } else if (Array.isArray(cur)) {
             for(var i=0, l=cur.length; i<l; i++)
                 recurse(cur[i], prop + "[" + i + "]");
            if (l == 0)
                result[prop] = [];
        } else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop+"."+p : p);
            }
            if (isEmpty && prop)
                result[prop] = {};
        }
    }
    recurse(data, "");
    return result;
}