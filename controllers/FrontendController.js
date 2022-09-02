const axios = require('axios')

const tugas1 = async (req, res) => {
    try {
        axios.get(`${process.env.BASEURL}/nasabah`)
        .then(r => {
            res.render('tugas1', {
                title: 'fajrulaslim',
                navbar: 'tugas1',
                data: r.data.data
            })
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas1ById = async (req, res) => {
    const { id } = req.params;
    try {
        axios.get(`${process.env.BASEURL}/nasabah/${id}`)
        .then(r => {
            redirect('/');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas1Add = async (req, res) => {
    const data = req.body;  
    try {
        axios.post(`${process.env.BASEURL}/nasabah`, data)
        .then(r => {
            res.redirect('/');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas1Edit = async (req, res) => {
    const data = req.body;  
    try {
        axios.put(`${process.env.BASEURL}/nasabah`, data)
        .then(r => {
            res.redirect('/');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas1Delete = async (req, res) => {
    const { id } = req.params;
    try {
        axios.delete(`${process.env.BASEURL}/nasabah/${id}`)
        .then(r => {
            res.redirect('/');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas2 = async (req, res) => {
    try {
        axios.get(`${process.env.BASEURL}/transaksi`)
        .then(r => {
            axios.get(`${process.env.BASEURL}/nasabah`)
            .then(r2 => {
                res.render('tugas2', {
                    title: 'fajrulaslim',
                    navbar: 'tugas2',
                    nasabah: r2.data.data,
                    data: r.data.data
                })
            })
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas2ById = async (req, res) => {
    const { id } = req.params;
    try {
        axios.get(`${process.env.BASEURL}/transaksi/${id}`)
        .then(r => {
            res.json({ data: r.data.data})
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas2Add = async (req, res) => {
    const data = req.body;  
    try {
        axios.post(`${process.env.BASEURL}/transaksi`, data)
        .then(r => {
            res.redirect('/tugas2');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas2Edit = async (req, res) => {
    const data = req.body;  
    try {
        axios.put(`${process.env.BASEURL}/transaksi`, data)
        .then(r => {
            res.redirect('/tugas2');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas2Delete = async (req, res) => {
    const { id } = req.params;
    try {
        axios.delete(`${process.env.BASEURL}/transaksi/${id}`)
        .then(r => {
            res.redirect('/tugas2');
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas3 = async (req, res) => {
    try {
        axios.get(`${process.env.BASEURL}/point_nasabah`)
        .then(r => {
            res.render('tugas3', {
                title: 'fajrulaslim',
                navbar: 'tugas3',
                data: r.data.data
            })
        })
        .catch(err => {
            return console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas4 = async (req, res) => {
    try {
        axios.get(`${process.env.BASEURL}/nasabah`)
        .then(r => {
            res.render('tugas4', {
                title: 'fajrulaslim',
                navbar: 'tugas4',
                name: '-',
                startDate: '-',
                endDate: '-',
                nasabah: r.data.data,
                data: []
            })
        })
    } catch (error) {
        return res.send('error')
    }
};

const tugas4Filter = async (req, res) => {
    const data = req.body;  
    try {
        let name = '-'
        axios.get(`${process.env.BASEURL}/nasabah/${data.accountId}`)
        .then(r1 => {
            name = r1.data.data.name
        })
        axios.post(`${process.env.BASEURL}/report`, data)
        .then(r => {
            console.log(r.data)
            axios.get(`${process.env.BASEURL}/nasabah`)
            .then(r2 => {
                res.render('tugas4', {
                    title: 'fajrulaslim',
                    navbar: 'tugas4',
                    name: name,
                    startDate: new Date(data.startDate).toISOString().slice(0, 10),
                    endDate: new Date(data.endDate).toISOString().slice(0, 10),
                    nasabah: r2.data.data,
                    data: r.data.data
                })
            })
        }).catch(err => {
            console.log('error', err.response)
        })
    } catch (error) {
        return res.send('error')
    }
};

module.exports = {
    tugas1,
    tugas1ById,
    tugas1Add,
    tugas1Edit,
    tugas1Delete,
    tugas2,
    tugas2ById,
    tugas2Add,
    tugas2Edit,
    tugas2Delete,
    tugas3,
    tugas4,
    tugas4Filter,
};