export default function ImageCard({ image }) {
  return (
    <li>
      <div>
        <img src={image.urls.small} alt={image.alt_description} />
      </div>
    </li>
  );
}
