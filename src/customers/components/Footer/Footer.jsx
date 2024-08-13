import { Button } from "@headlessui/react";
import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <div>
      <Grid className="bg-black text-white text-center mt-10 py-3" container>
        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Company
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              About
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Blogs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Press
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Jobs
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Patners
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Solutions
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Marketing
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Analytics
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
               Commerces
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Insites
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Support
            </Button>
          </div>
        </Grid>


        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Documentation
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Guides
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              API Staus
            </Button>
          </div>
          
        </Grid>

        <Grid item xs={12} sm={6} md={3}>
          <Typography className="pb-5" variant="h6">
            Legal
          </Typography>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Claim
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Privarcy
            </Button>
          </div>
          <div>
            <Button className="pb-5" variant="h6" gutterbutton>
              Terms
            </Button>
          </div>
        </Grid>

      <Grid className="pt-20" xs={12}>
               <p> &copy; Copy right since 2024</p>
               
      </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
