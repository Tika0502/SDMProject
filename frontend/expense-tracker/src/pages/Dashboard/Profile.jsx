import React, { useContext, useState } from "react";
import Input from "../../components/Inputs/Input";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPaths";
import uploadImage from "../../utils/uploadImage";
import { UserContext } from "../../context/UserContext";
import toast from "react-hot-toast";

export default function Profile() {
  const { user, updateUser } = useContext(UserContext);

  const [fullName, setFullName] = useState(user?.fullName || "");
  const [localImageFile, setLocalImageFile] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);

    try {
      let profileImageUrl = user?.profileImageUrl || "";

      if (localImageFile) {
        const res = await uploadImage(localImageFile);
        profileImageUrl = res?.imageUrl || profileImageUrl;
      }

      const { data } = await axiosInstance.put(API_PATHS.USER.UPDATE_ME, {
        fullName,
        profileImageUrl,
      });

      updateUser(data.user);
      toast.success("Profile updated!");
    } catch (err) {
      const msg = err?.response?.data?.message || "Update failed";
      toast.error(msg);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-1">Edit Profile</h2>
      <p className="text-slate-600 text-sm mb-6">
        Update your name and profile picture.
      </p>

      <form onSubmit={handleSave} className="max-w-xl space-y-5">
        <ProfilePhotoSelector image={localImageFile} setImage={setLocalImageFile}
          // show current image when no new file picked
          currentImageUrl={(!localImageFile && user?.profileImageUrl) ? user.profileImageUrl : undefined}
        />

        <Input
          value={fullName}
          onChange={({ target }) => setFullName(target.value)}
          label="Full Name"
          placeholder="John Doe"
          type="text"
        />

        <button type="submit" className="btn-primary" disabled={isSaving}>
          {isSaving ? "Saving..." : "Save Changes"}
        </button>
      </form>
    </div>
  );
}