import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";

function Copyright() {
  return (
    <div>
      <Box>
        <Typography variant="body2" color="textSecondary" align="center">
          {"© "}
          <Link color="inherit" href="https://t.1yb.co/s0ga" target="_blank">
          说明书(附源码)
          </Link>
          {"  "}
          <Link color="inherit" href="http://fan.coderstone.cn" target="_blank">
          这里有便宜的风扇
          </Link>
        </Typography>
      </Box>
      <Typography variant="body2" color="textSecondary" align="center">
        {new Date().getFullYear()}
      </Typography>
    </div>
  );
}

export default Copyright;
