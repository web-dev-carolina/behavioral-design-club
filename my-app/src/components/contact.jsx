// import logo from './logo.svg';
import './contact.css';
import {Grid, Box, TextField, InputLabel, FormControl, NativeSelect, Button} from "@material-ui/core"
import {Container, Row} from "react-bootstrap"

function Contact() {
  return (
    <div className="whole">
        <Grid container >
            <Grid item xs={4} style={{ padding: 15 }} class="box">
                <Box style={{borderWidth:1, alignItems:'start', justifyContent:'center', width:100, height:100,
                    backgroundColor:'white', borderRadius:10,}} class='text'>
                    <p color ='black'>We'd love to chat!</p>
                </Box>
            </Grid>
            <Grid item sm={8} style={{ padding: 15 }}>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label" >Name</InputLabel>
                    <Container>
                        <Row>
                            <TextField label="First Name" style={{ padding: 2 }}  />
                            <TextField label="Last Name" style={{ padding: 2 }} />
                        </Row>
                    </Container>
                    
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label standard-required">Email</InputLabel>
                    <TextField/>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel required id="demo-simple-select-placeholder-label-label standrd-required">Select an Option</InputLabel>
                    <FormControl>
                        <NativeSelect>
                            <option>--</option>
                            <option>Client Partner</option>
                            <option>Student Partner</option>
                            <option>Interest in Joining the Team</option>
                        </NativeSelect>
                    </FormControl>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }}>
                    <InputLabel id="demo-simple-select-placeholder-label-label">Message</InputLabel>
                    <TextField id="standard-full-width" placeholder="Write Message Here"
                               fullWidth margin="normal"/>
                </Grid>
                <Grid item xs={12} style={{ padding: 10 }} >
                    <Button variant="outline-secondary" type="submit">
                        Submit
                    </Button>
                    <Button variant="primary">Primary</Button>{' '}
                </Grid>
            </Grid>
        </Grid>
    </div>
  );
}

export default Contact;
