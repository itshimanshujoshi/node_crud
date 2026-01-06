import Todo from "../model/todoModel.js";

export const create = async (req, res) => {
  try {
    const data = new Todo(req.body);
    const savedTodo = await data.save();
    res.status(200).json(savedTodo);
  } catch (error) {
    if (error.name === "ValidationError") {
      const errors = Object.keys(error.errors).map((field) => ({
        field,
        message: error.errors[field].message,
      }));
      return res.status(400).json({ message: "Validation Error", errors });
    }
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const fetch = async (req, res) => {
  try {
    const todos = await Todo.find().select('title user_id').sort({ createdAt: -1 });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const fetchByID = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id).populate(
      "user_id",
      "name email"
    );
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: "Interval Server error" });
  }
};
