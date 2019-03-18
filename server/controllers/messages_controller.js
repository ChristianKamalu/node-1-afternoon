const messages = [];

let id = 0

module.exports = {
    create: (req, res) => {
        const { text, time } = req.body;
        newMessage = {
            id,
            text,
            time
        }
        messages.push(newMessage)
        res.status(200).send(messages);
        id++
    },
    read: (req, res) => {
        res.status(200).send(messages);
    },
    update: (req, res) => {
        let index = null;
        messages.forEach((message, i) => {
            if(message.id === req.params.id * 1) {
                index = i
            }
        })
        messages[index] = {
            id: messages[index].id,
            text: req.body.text || messages[index].text,
            time: messages[index].time
        }
        res.status(200).send(messages)
    },
    delete: (req, res) => {
        let index = null;
        messages.forEach((message, i) => {
            if(message.id === req.params.id * 1) {
                index = i
            };
        })
        messages.splice(index, 1);
        res.status(200).send(messages);
    }
}