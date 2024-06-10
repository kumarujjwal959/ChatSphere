import { Avatar } from "../models/avatars.js"

const insertDefaultAvatars = async () => {
  try {
    const count = await Avatar.countDocuments();
    if (count === 0) {
      const defaultAvatars = [];
      await Avatar.insertMany(defaultAvatars);
      console.log("Default avatars inserted successfully");
    } else {
      console.log("Avatars collection already initialized.");
    }
  } catch (error) {
    console.error("Error inserting default avatars:", error);
  }
};

export default insertDefaultAvatars;