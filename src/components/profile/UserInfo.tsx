import { Typography, Grid, Button, Box } from "@mui/material";
import { Stars, Mail } from "@mui/icons-material";
import { ICurrentUser } from "../../context/AuthProvider";

interface UserInfoProps {
    user: ICurrentUser;
}

const UserInfo = ({ user }: UserInfoProps) => {
    return (
        <>
            <Grid container marginBottom={1}>
                <Grid
                    item
                    xs={4}
                    md={12}
                    container
                    alignItems="center"
                    marginBottom={1}
                >
                    <Box
                        component="img"
                        src="https://thumb9.shutterstock.com/image-photo/stock-photo-head-shot-portrait-close-up-smiling-confident-businessman-wearing-glasses-looking-at-camera-250nw-1714666150.jpg"
                        alt="profile-pic"
                        sx={{
                            width: { xs: 100, md: 150 },
                            height: { xs: 100, md: 150 },
                            objectFit: "cover",
                            borderRadius: "50%",
                        }}
                    />
                </Grid>
                <Grid item xs={8} md={12}>
                    <Box display="flex" alignItems="center" gap={1}>
                        <Typography variant="h5" color="primary">
                            {user.nick_name}
                        </Typography>
                        <Box
                            display={{ xs: "flex", md: "none" }}
                            alignItems="center"
                        >
                            {user.is_premium && <Stars color="primary" />}
                        </Box>
                    </Box>
                    <Typography variant="subtitle1" color="text.secondary">
                        @{user.username}
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary">
                        2 followers
                    </Typography>
                    <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        display={{ xs: "none", md: "block" }}
                    >
                        {user.bio}
                    </Typography>
                </Grid>
            </Grid>
            <Button size="small" variant="contained" sx={{ marginRight: 1 }}>
                Follow
            </Button>
            <Button size="small" variant="contained">
                <Mail />
            </Button>
        </>
    );
};

export default UserInfo;
