import styled from "styled-components"

interface DataImageProps {
  href: string
  src: string
  type: string
}

const DataImage = ({ href, src, type }: DataImageProps) => {
  return (
    <td colSpan={type == "Ruby on Rails" ? 2 : undefined}>
      <Link href={href}>
        <img src={src} height="50px" width={type == "Ruby on Rails" ? "" : "50px"} title={type} alt={type} />
      </Link>
    </td>
  )
}

const Link = styled.a`
  background-color: #eee;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75px;
  padding: 0 16px;
  margin: 6px;
  transition: 0.25s;

  img {
    object-fit: contain;
  }

  &:hover {
    background-color: #ddd;
    transform: scale(1.1);
  }
`



export default DataImage
