import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function Posts({ data }) {
  const [expanded, setExpanded] = React.useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const listPosts = data.map((post) =>
  <Card sx={{ maxWidth: 345, marginRight: 5, marginBottom: 5 }} key={post.id}>
  <CardHeader    
    avatar={
      <IconButton aria-label="subject">
        <PublicOutlinedIcon />
      </IconButton>
    }
    action={
      <IconButton aria-label="subject">
        <AirplaneTicketOutlinedIcon />
      </IconButton>
    }

    title={post.name}
  />
  <CardMedia
    component="img"
    height="194"
    image={post.image_url}
  />
  <CardContent>
    <Typography variant="body2" color="text.secondary">
      {post.excerpt}
    </Typography>
  </CardContent>
  <CardActions disableSpacing>
    {/* Show More About The Country
    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    >
      <ExpandMoreIcon />
    </ExpandMore> */}
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      <Typography paragraph>
        { post.body }
      </Typography>
    </CardContent>
  </Collapse>
</Card>
  );
  return (
    <div id="posts-page">
      <h1>Posts</h1>
      <div id="show-more-about-countries-wrapper">
        <h2>Show More About The Countries</h2>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </div>

      <main id="posts-wrapper">
        { listPosts }
      </main>
    </div>
  )
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:3000/api/posts`)
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }
}

export default Posts