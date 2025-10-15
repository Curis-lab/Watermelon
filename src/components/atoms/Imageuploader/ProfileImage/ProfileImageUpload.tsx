import { ChangeEvent, useState } from "react";

const ProfileImageUpload = ({
  handleImageUpload,
  imageUrl
}: {
  handleImageUpload: (e:ChangeEvent<HTMLInputElement>) => void;
  imageUrl?:string;
}) => {
  const [draggingOver, setDraggingOver] = useState(false);

  return (
    <div
      style={{
        height: "100px",
        width: "100px",
        border: "4px dashed black",
        borderRadius: "50%",
        position: "relative",
        backgroundSize: 'cover',
        ...(imageUrl ? {backgroundImage: `url(${imageUrl})`}:{})
      }}
      onDragEnter={() => setDraggingOver(true)}
      onDragLeave={() => setDraggingOver(false)}
    >
      { draggingOver && 
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backgroundColor: "blue",
            borderRadius: "50%",
          }}
        />
      }
      {
        <p>+</p>
      }
      <input
        id="file-input"
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        style={{
          width: "100%",
          height: "100%",
          opacity: 0,
          position: "absolute",
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default ProfileImageUpload;
