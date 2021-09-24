import React from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId, link }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={link + embedId}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </div>
);

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default YoutubeEmbed;
