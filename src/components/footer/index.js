import React from "react";
import { t } from "i18next";
import { 
  Footer, 
  FooterFlow, 
  FooterLink, 
  FooterList 
} from "./styles";


function FooterBar() {
  return (
    <>
      <Footer>
        <h4>
          {t("Footer.MadeBy")}
        </h4>
        <FooterFlow>
          <FooterList>
            <FooterLink
              href="https://github.com/Andreastak86"
            >
              Andreastak86
            </FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink
              href="https://github.com/Morthenjo"
            >
              Morthenjo
            </FooterLink>
          </FooterList>
          <FooterList>
            <FooterLink
              href="https://github.com/OleKodehode"
            >
              OleKodehode
            </FooterLink>
          </FooterList>
          <FooterList>

          </FooterList>
        </FooterFlow>
      </Footer></>
  )
}
export default FooterBar;
