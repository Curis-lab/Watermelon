import { useState, DragEvent, ChangeEvent } from 'react';
import { Box, Typography, Button } from '@mui/material';


/**
 * 
 * @returns Have no button instance of it, show progress bar.
 */
const ImageUploaderWithProgressBar = () => {
  const [files, setFiles] = useState<File[]>([]);
  const [isDragActive, setIsDragActive] = useState(false);

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles(droppedFiles);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragActive(false);
  };

  const handleFileInput = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setFiles(selectedFiles);
    }
  };

  return (
    <Box
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      sx={{
        border: '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        backgroundColor: isDragActive ? '#f0f0f0' : '#fff',
      }}
    >
      <input
        type="file"
        onChange={handleFileInput}
        style={{ display: 'none' }}
        id="file-input"
        multiple
      />
      <label htmlFor="file-input" style={{ cursor: 'pointer' }}>
        {isDragActive ? (
          <Typography>Drop the files here ...</Typography>
        ) : (
          <Typography>Drag 'n' drop some files here, or click to select files</Typography>
        )}
      </label>
      <Box sx={{ mt: 2 }}>
        {files.map((file) => (
          <Typography key={file.name}>{file.name}</Typography>
        ))}
      </Box>
      <Button
        variant="contained"
        color="primary"
        onClick={() => console.log('Files to be uploaded:', files)}
        sx={{ mt: 2 }}
      >
        Upload
      </Button>
    </Box>
  );
};

export default ImageUploaderWithProgressBar;