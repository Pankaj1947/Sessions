import React from "react";
import {
    Carddiv,
    CardNumber,
    Chipimg,
    Creditcardwrap,
    CreditExip,
    Visa,
    Header
} from "./CardStyled";
const CreditCard = ({ name, number, year, month, cvv }) => {
    return (
        <Carddiv>
            <Creditcardwrap>
                <Header>
                    <Chipimg src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHzRrjPsvrA2b9XFdtR7ur4Bu2pIy5Se_IXg&usqp=CAU" />
                    <Visa>Visa</Visa>
                </Header>

                <div>
                    <div>
                        <CardNumber>{number}</CardNumber>
                        <CreditExip>
                            <div>
                                <h6>CARD HOLDER</h6>
                                <p>{name}</p>
                            </div>
                            <div>
                                <h6>EXPIRY</h6>
                                <p>
                                    {month}/{year}
                                </p>{" "}
                            </div>
                            <div>
                                <h6>CVV</h6>
                                <p>{cvv}</p>
                            </div>
                        </CreditExip>
                    </div>
                </div>
            </Creditcardwrap>
        </Carddiv>
    );
}

export default CreditCard;