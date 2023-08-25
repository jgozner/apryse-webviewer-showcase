/* global SignerDigital */

export async function getUSBDevices () {
    var SmartcardReaders = await SignerDigital.getPCSCReaders(true);
    console.log(SmartcardReaders)
    var SCReaders = JSON.parse(SmartcardReaders);
    console.log("SCReaders", SCReaders)
    var scName = await SignerDigital.getSCNameByReaderName(SCReaders[0])
    console.log("scName:", scName)
    var pcksLib = await SignerDigital.getPkcsLibBySCName(scName);
    console.log("pcksLib", pcksLib);
    return scName;
}

export async function selectUsbDevice(device){
    console.log("selectUsbDevice: ",device)
    var reader = await SignerDigital.getPkcsLibBySCName(device);
    console.log(reader)
}

export async function getSelectedCert () {
    const cert = await SignerDigital.getSelectedCertificate();
    console.log(cert)
}