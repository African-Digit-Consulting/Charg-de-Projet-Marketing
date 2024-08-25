document.getElementById('captureBtn-prodma').addEventListener('click', () => {
    html2canvas(document.getElementById('myChart_5')).then(canvas => {
        const imageURL = canvas.toDataURL('image/jpeg', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'Statistique des produits les moins achetés.jpg';
        link.click();
    });
    });
    document.getElementById('captureBtn-pr').addEventListener('click', () => {
        html2canvas(document.getElementById('myChart_5')).then(canvas => {
            const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
            const link = document.createElement('a');
            link.href = imageURL;
            link.download = 'Statistique des produits les moins achetés.jpg';
            link.click();
        });
        });
        // Pour le chart 5
        document.getElementById('captureBtn-prodpa').addEventListener('click', () => {
            html2canvas(document.getElementById('myChart_4')).then(canvas => {
                const imageURL = canvas.toDataURL('image/jpeg', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                const link = document.createElement('a');
                link.href = imageURL;
                link.download = 'Statistique des produits les plus achetés.jpg';
                link.click();
            });
            });
            document.getElementById('captureBtn-pro').addEventListener('click', () => {
                html2canvas(document.getElementById('myChart_4')).then(canvas => {
                    const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                    const link = document.createElement('a');
                    link.href = imageURL;
                    link.download = 'Statistique des produits les plus achetés.jpg';
                    link.click();
                });
                });
         // Pour le chart 3
         document.getElementById('captureBtn-anaperf').addEventListener('click', () => {
            html2canvas(document.getElementById('myChart_3')).then(canvas => {
                const imageURL = canvas.toDataURL('image/jpeg', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                const link = document.createElement('a');
                link.href = imageURL;
                link.download = 'Statistique analyse des performances rdv clients.jpg';
                link.click();
            });
            });
            document.getElementById('captureBtn-an').addEventListener('click', () => {
                html2canvas(document.getElementById('myChart_3')).then(canvas => {
                    const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                    const link = document.createElement('a');
                    link.href = imageURL;
                    link.download = 'Statistique analyse des performances rdv clients.jpg';
                    link.click();
                });
                });
                // Pour le chart des statistique et performances client
                document.getElementById('captureBtn-stperfclient').addEventListener('click', () => {
                    html2canvas(document.getElementById('table')).then(canvas => {
                        const imageURL = canvas.toDataURL('image/jpeg', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                        const link = document.createElement('a');
                        link.href = imageURL;
                        link.download = 'Statistique et performance des clients.jpg';
                        link.click();
                    });
                    });
                    document.getElementById('captureBtn-stper').addEventListener('click', () => {
                        html2canvas(document.getElementById('table')).then(canvas => {
                            const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                            const link = document.createElement('a');
                            link.href = imageURL;
                            link.download = 'Statistique et performance des clients.jpg';
                            link.click();
                        });
                        });
                    // Pour le chart des statistique des prospects
                    document.getElementById('captureBtn-prosp').addEventListener('click', () => {
                        html2canvas(document.getElementById('myPlot')).then(canvas => {
                            const imageURL = canvas.toDataURL('image/jpeg', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                            const link = document.createElement('a');
                            link.href = imageURL;
                            link.download = 'Statistique des prospects.jpg';
                            link.click();
                        });
                        });
                        document.getElementById('captureBtn-pros').addEventListener('click', () => {
                            html2canvas(document.getElementById('myPlot')).then(canvas => {
                                const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                                const link = document.createElement('a');
                                link.href = imageURL;
                                link.download = 'Statistique des prospects.jpg';
                                link.click();
                            });
                            });
                        // Pour le deuxieme graphe des statistique des prospects
                        document.getElementById('captureBtn-prospects').addEventListener('click', () => {
                            html2canvas(document.getElementById('prospects')).then(canvas => {
                                const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                                const link = document.createElement('a');
                                link.href = imageURL;
                                link.download = 'Statistique des prospects.png';
                                link.click();
                            });
                            });
                            document.getElementById('captureBtn-prospt').addEventListener('click', () => {
                                html2canvas(document.getElementById('prospects')).then(canvas => {
                                    const imageURL = canvas.toDataURL('image/png', 1.0); // Set the format to JPG and quality to 1.0 (maximum)
                                    const link = document.createElement('a');
                                    link.href = imageURL;
                                    link.download = 'Statistique des prospects.png';
                                    link.click();
                                });
                                });
