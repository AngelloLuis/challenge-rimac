

const taskSchema = (id, title, description, createdAt) => {
    return {
        Item: {
            id: id,
            title: title,
            description: description,
            createdAt: createdAt
        },
    }
};

module.exports = {
    taskSchema
};
