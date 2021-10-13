export interface Links {
  self: string;
  git: string;
  html: string;
}

export interface CollectionResponse {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string;
  type: string;
  content: string;
  encoding: string;
  _links: Links;
}

export interface CollectionsData {
  collections: Collections;
  parsers: Parsers;
  postoverflows: Postoverflows;
  scenarios: Scenarios;
}

export interface Collections {
  'crowdsecurity/apache2': CrowdsecurityApache2;
  'crowdsecurity/base-http-scenarios': CrowdsecurityBaseHttpScenarios;
  'crowdsecurity/caddy': CrowdsecurityCaddy;
  'crowdsecurity/cpanel': CrowdsecurityCpanel;
  'crowdsecurity/dovecot': CrowdsecurityDovecot;
  'crowdsecurity/haproxy': CrowdsecurityHaproxy;
  'crowdsecurity/http-cve': CrowdsecurityHttpCve;
  'crowdsecurity/iptables': CrowdsecurityIptables;
  'crowdsecurity/linux': CrowdsecurityLinux;
  'crowdsecurity/modsecurity': CrowdsecurityModsecurity;
  'crowdsecurity/mysql': CrowdsecurityMysql;
  'crowdsecurity/naxsi': CrowdsecurityNaxsi;
  'crowdsecurity/nginx': CrowdsecurityNginx;
  'crowdsecurity/pgsql': CrowdsecurityPgsql;
  'crowdsecurity/postfix': CrowdsecurityPostfix;
  'crowdsecurity/sshd': CrowdsecuritySshd;
  'crowdsecurity/vsftpd': CrowdsecurityVsftpd;
  'crowdsecurity/whitelist-good-actors': CrowdsecurityWhitelistGoodActors;
  'crowdsecurity/wordpress': CrowdsecurityWordpress;
  'firewallservices/lemonldap-ng': FirewallservicesLemonldapNg;
  'firewallservices/pf': FirewallservicesPf;
  'firewallservices/zimbra': FirewallservicesZimbra;
}

export interface Collection {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityApache2 {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  collections: string[];
}

export interface CrowdsecurityBaseHttpScenarios {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityCaddy {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  collections: string[];
}

export interface CrowdsecurityCpanel {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityDovecot {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityHaproxy {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  collections: string[];
}

export interface CrowdsecurityHttpCve {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  author: string;
  labels?: any;
  scenarios: string[];
}

export interface CrowdsecurityIptables {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityLinux {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  collections: string[];
}

export interface CrowdsecurityModsecurity {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityMysql {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityNaxsi {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityNginx {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  collections: string[];
}

export interface CrowdsecurityPgsql {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityPostfix {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecuritySshd {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityVsftpd {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityWhitelistGoodActors {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  postoverflows: string[];
}

export interface CrowdsecurityWordpress {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  scenarios: string[];
}

export interface FirewallservicesLemonldapNg {
  path: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface FirewallservicesPf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface FirewallservicesZimbra {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
  parsers: string[];
  scenarios: string[];
}

export interface CrowdsecurityApache2Logs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityCaddyLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityCowrieLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityCpanelLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityDateparseEnrich {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityDockerLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityDovecotLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityGeoipEnrich {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityHaproxyLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityHttpLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityIptablesLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityModsecurity2 {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityMysqlLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityNaxsiLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityNginxLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityPgsqlLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityPostfixLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityPostscreenLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecuritySmbLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecuritySshdLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecuritySyslogLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityTcpdumpLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityVsftpdLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityWhitelists {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface FirewallservicesLemonldapNg2 {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface FirewallservicesPfLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface FirewallservicesZimbraLogs {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface Parsers {
  'crowdsecurity/apache2-logs': CrowdsecurityApache2Logs;
  'crowdsecurity/caddy-logs': CrowdsecurityCaddyLogs;
  'crowdsecurity/cowrie-logs': CrowdsecurityCowrieLogs;
  'crowdsecurity/cpanel-logs': CrowdsecurityCpanelLogs;
  'crowdsecurity/dateparse-enrich': CrowdsecurityDateparseEnrich;
  'crowdsecurity/docker-logs': CrowdsecurityDockerLogs;
  'crowdsecurity/dovecot-logs': CrowdsecurityDovecotLogs;
  'crowdsecurity/geoip-enrich': CrowdsecurityGeoipEnrich;
  'crowdsecurity/haproxy-logs': CrowdsecurityHaproxyLogs;
  'crowdsecurity/http-logs': CrowdsecurityHttpLogs;
  'crowdsecurity/iptables-logs': CrowdsecurityIptablesLogs;
  'crowdsecurity/modsecurity': CrowdsecurityModsecurity2;
  'crowdsecurity/mysql-logs': CrowdsecurityMysqlLogs;
  'crowdsecurity/naxsi-logs': CrowdsecurityNaxsiLogs;
  'crowdsecurity/nginx-logs': CrowdsecurityNginxLogs;
  'crowdsecurity/pgsql-logs': CrowdsecurityPgsqlLogs;
  'crowdsecurity/postfix-logs': CrowdsecurityPostfixLogs;
  'crowdsecurity/postscreen-logs': CrowdsecurityPostscreenLogs;
  'crowdsecurity/smb-logs': CrowdsecuritySmbLogs;
  'crowdsecurity/sshd-logs': CrowdsecuritySshdLogs;
  'crowdsecurity/syslog-logs': CrowdsecuritySyslogLogs;
  'crowdsecurity/tcpdump-logs': CrowdsecurityTcpdumpLogs;
  'crowdsecurity/vsftpd-logs': CrowdsecurityVsftpdLogs;
  'crowdsecurity/whitelists': CrowdsecurityWhitelists;
  'firewallservices/lemonldap-ng': FirewallservicesLemonldapNg2;
  'firewallservices/pf-logs': FirewallservicesPfLogs;
  'firewallservices/zimbra-logs': FirewallservicesZimbraLogs;
}

export interface CrowdsecurityCdnWhitelist {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecurityRdns {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface CrowdsecuritySeoBotsWhitelist {
  path: string;
  stage: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels?: any;
}

export interface Postoverflows {
  'crowdsecurity/cdn-whitelist': CrowdsecurityCdnWhitelist;
  'crowdsecurity/rdns': CrowdsecurityRdns;
  'crowdsecurity/seo-bots-whitelist': CrowdsecuritySeoBotsWhitelist;
}

export interface Labels {
  remediation: string;
}

export interface CrowdsecurityBanDefconDropRange {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels;
}

export interface Labels2 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityCpanelBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels2;
}

export interface Labels3 {
  remediation: string;
  type: string;
}

export interface CrowdsecurityDovecotSpam {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels3;
}

export interface Labels4 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpBackdoorsAttempts {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels4;
}

export interface Labels5 {
  remediation: string;
  type: string;
}

export interface CrowdsecurityHttpBadUserAgent {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels5;
}

export interface Labels6 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpBfWordpressBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels6;
}

export interface Labels7 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpBfWordpressBfXmlrpc {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels7;
}

export interface Labels8 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpCrawlNonStatics {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels8;
}

export interface Labels9 {
  remediation: string;
  type: string;
}

export interface CrowdsecurityHttpCve202141773 {
  path: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels: Labels9;
}

export interface Labels10 {
  remediation: string;
  type: string;
}

export interface CrowdsecurityHttpCve202142013 {
  path: string;
  version: string;
  versions: any;
  content: string;
  description: string;
  author: string;
  labels: Labels10;
}

export interface Labels11 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpGenericBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels11;
}

export interface Labels12 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpOpenProxy {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels12;
}

export interface Labels13 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpPathTraversalProbing {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels13;
}

export interface Labels14 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpProbing {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels14;
}

export interface Labels15 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpSensitiveFiles {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels15;
}

export interface Labels16 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpSqliProbing {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels16;
}

export interface Labels17 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpWordpressWpconfig {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels17;
}

export interface Labels18 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityHttpXssProbing {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels18;
}

export interface Labels19 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityIptablesScanMultiPorts {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels19;
}

export interface Labels20 {
  remediation: string;
  scope: string;
  service: string;
  type: string;
}

export interface CrowdsecurityModsecurity3 {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels20;
}

export interface Labels21 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityMysqlBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels21;
}

export interface Labels22 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityNaxsiExploitVpatch {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels22;
}

export interface Labels23 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityPgsqlBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels23;
}

export interface Labels24 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityPostfixSpam {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  references: string[];
  labels: Labels24;
}

export interface Labels25 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecuritySmbBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels25;
}

export interface Labels26 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecuritySshBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  references: string[];
  labels: Labels26;
}

export interface Labels27 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecuritySshSlowBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  references: string[];
  labels: Labels27;
}

export interface Labels28 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityTelnetBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels28;
}

export interface Labels29 {
  remediation: string;
  service: string;
  type: string;
}

export interface CrowdsecurityVsftpdBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels29;
}

export interface Labels30 {
  remediation: string;
  service: string;
  type: string;
}

export interface FirewallservicesLemonldapNgBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels30;
}

export interface Labels31 {
  remediation: string;
  service: string;
  type: string;
}

export interface FirewallservicesPfScanMultiPorts {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels31;
}

export interface Labels32 {
  remediation: string;
  service: string;
  type: string;
}

export interface FirewallservicesZimbraBf {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels32;
}

export interface Labels33 {
  remediation: string;
  service: string;
  type: string;
}

export interface LtsichHttpW00tw00t {
  path: string;
  version: string;
  versions: any;
  long_description: string;
  content: string;
  description: string;
  author: string;
  labels: Labels33;
}

export interface Scenarios {
  'crowdsecurity/ban-defcon-drop_range': CrowdsecurityBanDefconDropRange;
  'crowdsecurity/cpanel-bf': CrowdsecurityCpanelBf;
  'crowdsecurity/dovecot-spam': CrowdsecurityDovecotSpam;
  'crowdsecurity/http-backdoors-attempts': CrowdsecurityHttpBackdoorsAttempts;
  'crowdsecurity/http-bad-user-agent': CrowdsecurityHttpBadUserAgent;
  'crowdsecurity/http-bf-wordpress_bf': CrowdsecurityHttpBfWordpressBf;
  'crowdsecurity/http-bf-wordpress_bf_xmlrpc': CrowdsecurityHttpBfWordpressBfXmlrpc;
  'crowdsecurity/http-crawl-non_statics': CrowdsecurityHttpCrawlNonStatics;
  'crowdsecurity/http-cve-2021-41773': CrowdsecurityHttpCve202141773;
  'crowdsecurity/http-cve-2021-42013': CrowdsecurityHttpCve202142013;
  'crowdsecurity/http-generic-bf': CrowdsecurityHttpGenericBf;
  'crowdsecurity/http-open-proxy': CrowdsecurityHttpOpenProxy;
  'crowdsecurity/http-path-traversal-probing': CrowdsecurityHttpPathTraversalProbing;
  'crowdsecurity/http-probing': CrowdsecurityHttpProbing;
  'crowdsecurity/http-sensitive-files': CrowdsecurityHttpSensitiveFiles;
  'crowdsecurity/http-sqli-probing': CrowdsecurityHttpSqliProbing;
  'crowdsecurity/http-wordpress_wpconfig': CrowdsecurityHttpWordpressWpconfig;
  'crowdsecurity/http-xss-probing': CrowdsecurityHttpXssProbing;
  'crowdsecurity/iptables-scan-multi_ports': CrowdsecurityIptablesScanMultiPorts;
  'crowdsecurity/modsecurity': CrowdsecurityModsecurity3;
  'crowdsecurity/mysql-bf': CrowdsecurityMysqlBf;
  'crowdsecurity/naxsi-exploit-vpatch': CrowdsecurityNaxsiExploitVpatch;
  'crowdsecurity/pgsql-bf': CrowdsecurityPgsqlBf;
  'crowdsecurity/postfix-spam': CrowdsecurityPostfixSpam;
  'crowdsecurity/smb-bf': CrowdsecuritySmbBf;
  'crowdsecurity/ssh-bf': CrowdsecuritySshBf;
  'crowdsecurity/ssh-slow-bf': CrowdsecuritySshSlowBf;
  'crowdsecurity/telnet-bf': CrowdsecurityTelnetBf;
  'crowdsecurity/vsftpd-bf': CrowdsecurityVsftpdBf;
  'firewallservices/lemonldap-ng-bf': FirewallservicesLemonldapNgBf;
  'firewallservices/pf-scan-multi_ports': FirewallservicesPfScanMultiPorts;
  'firewallservices/zimbra-bf': FirewallservicesZimbraBf;
  'ltsich/http-w00tw00t': LtsichHttpW00tw00t;
}
