import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import FileUploader from "../FileUploader";
import IconButton from "../IconButton";

import { ICONS } from "../../constants";

const toBase64 = file => {
  const reader = new FileReader();

  return new Promise(resolve => {
    reader.onload = ({ target }) => resolve(target.result);
    reader.readAsDataURL(file);
  });
};

const ImageUploader = ({ onChange, ...props }) => {
  const [file, setFile] = React.useState(undefined);
  const [preview, setPreview] = React.useState(undefined);

  const [isLoading, setIsLoading] = React.useState(false);
  const [isErrored, setIsErrored] = React.useState(false);

  const handleFileChange = eventFile => {
    if (!eventFile) {
      setIsLoading(false);
      setIsErrored(false);
      setFile(undefined);
      setPreview(undefined);
    }

    setFile(eventFile);
  };

  const handleResetState = () => {
    setFile(undefined);
    setPreview(undefined);
  };

  React.useEffect(
    () => {
      if (file) {
        setIsLoading(true);
        toBase64(file).then(data => {
          setPreview(data);
          setIsLoading(false);
        });
      }
    },
    [file]
  );

  return (
    <FileUploader
      className={cx({
        "has-preview": preview,
        "is-loading": isLoading,
      })}
      onChange={handleFileChange}
      file={file}
      isLoading={isLoading}
      isErrored={isErrored}
      {...props}
    >
      <div
        className="ImageUploader-preview"
        style={{
          backgroundImage: `url(${preview})`,
        }}
      />

      <div className="ImageUploader-hoverState">
        <IconButton onClick={handleResetState} icon={ICONS.IconTrash} />
      </div>
    </FileUploader>
  );
};

ImageUploader.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default ImageUploader;
