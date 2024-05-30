
import { Box, List, ListItem, ListItemButton, Link } from '@mui/material';

export interface NavButtonProps {
  text: string;
  href: string;
}

export function NavButton(props: NavButtonProps) {
    return (
      <Box sx={{ maxWidth: 360, mx: 'auto', p: 2 }}>
        <List>
          <ListItem sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <ListItemButton component="a" href={props.href}>
              <Link color="inherit" sx={{ textDecoration: 'none' }}>
                {props.text}
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  }
