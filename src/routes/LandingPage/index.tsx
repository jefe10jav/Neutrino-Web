import React from 'react';
// import { html, dal } from 'components';
import { buildBem } from './helpers';
import LandingHeader from './LandingHeader';
import { GlobalLinksContext } from 'shared/Layout/context';
import { TERMS_OF_USE_LABEL } from 'shared/Layout/constants';
import { Translation } from 'react-i18next';
const backgroundImage = 'static/images/landing/background.png';
const usdnLogo = 'static/icons/usd-n_blue.svg';
const boxesImage = 'static/images/landing/boxes.svg';
const coloredBoxesImage = 'static/images/landing/colored_boxes.svg';
const fbIcon = 'static/images/landing/socials/fb-icon.svg';
const mediumIcon = 'static/images/landing/socials/medium-icon.svg';
const tgIcon = 'static/images/landing/socials/tg-icon.svg';
const twitterIcon = 'static/images/landing/socials/twitter.svg';
const poweredByWavesLogo = 'static/images/landing/powered_by_waves.svg';

import './style.scss';

const bem = buildBem('LandingPage');

interface Props {}

type SocLink = { icon: string; route: string };

class LandingPage extends React.Component<Props> {
    constructor(props) {
        super(props);
    }

    render() {
        const boxes = Array(2).fill(<img src={boxesImage} />);
        const coloredBoxes = Array(2).fill(<img src={coloredBoxesImage} />);
        const socLinks = [
            { icon: fbIcon, route: 'https://www.facebook.com/Neutrino-Protocol-106351204088941/' },
            { icon: mediumIcon, route: 'https://medium.com/@neutrinoteam' },
            { icon: tgIcon, route: 'https://t.me/neutrino_protocol_group' },
            { icon: twitterIcon, route: 'https://twitter.com/neutrino_proto' },
        ].map((item: SocLink) => (
            <a href={item.route} target="_blank">
                <img src={item.icon} />
            </a>
        ));

        const getParagraph = t => (
            <p>
                <span>
                    {t('landing.first_paragraph.label')}&nbsp;
                </span>
                <span>
                    {t('landing.second_paragraph.label')}
                </span>
            </p>
        );

        return (
            <Translation>
                {t => (
                    <div className={bem.element('main')}>
                        <div
                            className={bem.element('first-part')}
                            style={{ backgroundImage: `url('${backgroundImage}')` }}
                        >
                            <LandingHeader />
                            <div className={bem.element('txt-body')}>
                                <span>{t('landing.neutrino_main_title.label')}</span>
                                {getParagraph(t)}
                            </div>
                        </div>
                        <div className={bem.element('second-part')}>
                            <div className={bem.element('abs-boxes', 'top')}>{boxes}</div>
                            <div className={bem.element('abs-boxes', 'bottom')}>{coloredBoxes}</div>
                            <div className={bem.element('romb')}>
                                <div className={bem.element('inner-romb')}>
                                    <div className={bem.element('romb-text')}>
                                        <span>
                                            <img
                                                src={usdnLogo}
                                                className={bem.element('usdn-logo')}
                                            />
                                            <span>1</span>
                                        </span>
                                        <span>=</span>
                                        <span>$1</span>
                                    </div>
                                </div>
                            </div>
                            <div className={bem.element('action-buttons')}>
                                <a className="base-button" target="_blank" href="/neutrino/usd-n">
                                    {t('landing.get_usdn.label')}
                                </a>
                                <a
                                    className="base-button alt"
                                    target="_blank"
                                    href="https://medium.com/@neutrinoteam/neutrino-protocol-faq-bf19c79eb354"
                                >
                                    {t('landing.how_it_works.label')}
                                </a>
                            </div>
                            <div className={bem.element('mobile-info')}>{getParagraph(t)}</div>
                            <GlobalLinksContext.Consumer>
                                {context => {
                                    const tosLink = context.links.find(
                                        link => link.label === TERMS_OF_USE_LABEL
                                    ).url;
                                    return (
                                        <div className={bem.element('tos')}>
                                            <a href={tosLink} target="_blank">
                                                {TERMS_OF_USE_LABEL}
                                            </a>
                                        </div>
                                    );
                                }}
                            </GlobalLinksContext.Consumer>
                            <div className={bem.element('soc-links')}>{socLinks}</div>
                            <div className={bem.element('powered-by-waves')}>
                                <img src={poweredByWavesLogo} alt="powered by waves" />
                            </div>
                        </div>
                    </div>
                )}
            </Translation>
        );
    }
}

export default LandingPage;
