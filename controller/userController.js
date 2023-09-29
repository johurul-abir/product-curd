
// controllers
export const createUser = (req, res) => {
    res.status(201).json(req.body);
}


export const createInfo = (req, res) => {
    res.status(200).send("my name is johurul islam i am a customer of our company")
};


export const uploadUserPhoto = (req, res) => {
    res.status(200).json(req.body);
}



