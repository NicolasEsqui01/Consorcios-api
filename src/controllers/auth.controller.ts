export const persistSesson = async (req: any, res: any, next: any) => {
  try {
    if (req.user) {
      return res.status(200).json(req.user);
    }
  } catch {
    res.status(500).json({ message: "Internal server error", status: 500 });
  }
};
