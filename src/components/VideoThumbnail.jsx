import styled from "styled-components";
import { Avatar } from "@mui/material";

export function VideoThumbnail() {
  return (
    <ThumbnailContainer>
      <ThumbnailImage src="https://picsum.photos/200/120" />
      <ThumbnailInnerBox>
        <Avatar
          src="https://kanto.legiaodosherois.com.br/w250-h250-gnw-cfill-q95-gcc/wp-content/uploads/2021/07/legiao_Ry1hNJoxOzpY.jpg.webp"
          sx={{ width: "32px", height: "32px" }}
        />
        <TextBox>
          <ThumbnailTitleLink href="https://google.com">
            Como ser igual ao Luccas Neto
          </ThumbnailTitleLink>
          <ThumbnailChannelLink href="https://facebook.com">
            Luccas Neto
          </ThumbnailChannelLink>
          <ThumbnailInfo>37 mi de visualizações - há 6 anos</ThumbnailInfo>
        </TextBox>
      </ThumbnailInnerBox>
    </ThumbnailContainer>
  );
}

const ThumbnailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const ThumbnailInnerBox = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
`;

const TextBox = styled.div`
  display: flex;
  gap: 4px;
  flex-direction: column;
`;

const ThumbnailImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

const ThumbnailTitleLink = styled.a`
  font-size: 0.9em;
  line-height: 1;
  font-weight: bold;
  margin-bottom: 4px;
`;

const ThumbnailChannelLink = styled.a`
  font-size: 0.8em;
  opacity: 0.8;
  line-height: 1;
`;

const ThumbnailInfo = styled.a`
  font-size: 0.8em;
  opacity: 0.8;
  line-height: 1;
`;
