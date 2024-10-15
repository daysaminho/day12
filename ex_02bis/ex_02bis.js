const fs = require('fs').promises;

async function checkCSV(filePath) {
    const text = await fs.readFile(filePath, 'utf8');
    
    const lines = text.split('\n');
    lines.forEach(line => {
        const columns = line.split(',');
        const year = columns[0];
        const januaryTemp = columns[1];

        if (year && januaryTemp) {
            console.log(`${year}: ${januaryTemp}`);
        }
    });
}

checkCSV('global_temperature.csv');
