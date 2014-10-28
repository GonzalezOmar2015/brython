;(function($B){

$B.stdlib = {}
var js=['builtins','dis','hashlib','javascript','json','marshal','math','modulefinder','time','_ajax','_browser','_html','_io','_jsre','_multiprocessing','_os','_posixsubprocess','_svg','_sys','_timer','_websocket','__random','aes','hmac-md5','hmac-ripemd160','hmac-sha1','hmac-sha224','hmac-sha256','hmac-sha3','hmac-sha384','hmac-sha512','md5','pbkdf2','rabbit-legacy','rabbit','rc4','ripemd160','sha1','sha224','sha256','sha3','sha384','sha512','tripledes']
for(var i=0, _len_i = js.length; i < _len_i;i++) $B.stdlib[js[i]]=['js']

var pylist=['abc','antigravity','atexit','base64','binascii','bisect','calendar','codecs','colorsys','configparser','contextlib','copy','copyreg','csv','datetime','decimal','difflib','errno','external_import','fnmatch','formatter','fractions','functools','gc','genericpath','getopt','heapq','imp','inspect','io','itertools','keyword','linecache','locale','markdown2','numbers','operator','optparse','os','pickle','platform','posix','posixpath','pprint','pwd','pydoc','pyre','queue','random','re','reprlib','select','shutil','signal','site','socket','sre_compile','sre_constants','sre_parse','stat','string','struct','subprocess','sys','sysconfig','tarfile','tempfile','textwrap','this','threading','token','tokenize','traceback','types','VFS_import','warnings','weakref','webbrowser','_abcoll','_codecs','_collections','_csv','_dummy_thread','_functools','_imp','_io','_markupbase','_random','_socket','_sre','_string','_strptime','_struct','_sysconfigdata','_testcapi','_thread','_threading_local','_warnings','_weakref','_weakrefset','browser.ajax','browser.html','browser.indexed_db','browser.local_storage','browser.markdown','browser.object_storage','browser.session_storage','browser.svg','browser.timer','browser.websocket','collections.abc','encodings.aliases','encodings.utf_8','html.entities','html.parser','http.cookies','importlib.abc','importlib.machinery','importlib.util','importlib._bootstrap','logging.config','logging.handlers','multiprocessing.pool','multiprocessing.process','multiprocessing.util','multiprocessing.dummy.connection','pydoc_data.topics','site-packages.test_sp','test.pystone','test.regrtest','test.re_tests','test.support','test.test_int','test.test_re','ui.dialog','ui.progressbar','ui.slider','ui.widget','unittest.case','unittest.loader','unittest.main','unittest.mock','unittest.result','unittest.runner','unittest.signals','unittest.suite','unittest.util','unittest.__main__','unittest.test.dummy','unittest.test.support','unittest.test.test_assertions','unittest.test.test_break','unittest.test.test_case','unittest.test.test_discovery','unittest.test.test_functiontestcase','unittest.test.test_loader','unittest.test.test_program','unittest.test.test_result','unittest.test.test_runner','unittest.test.test_setups','unittest.test.test_skipping','unittest.test.test_suite','unittest.test._test_warnings','unittest.test.testmock.support','unittest.test.testmock.testcallable','unittest.test.testmock.testhelpers','unittest.test.testmock.testmagicmethods','unittest.test.testmock.testmock','unittest.test.testmock.testpatch','unittest.test.testmock.testsentinel','unittest.test.testmock.testwith','urllib.parse','urllib.request','xml.dom.domreg','xml.dom.expatbuilder','xml.dom.minicompat','xml.dom.minidom','xml.dom.NodeFilter','xml.dom.pulldom','xml.dom.xmlbuilder','xml.etree.cElementTree','xml.etree.ElementInclude','xml.etree.ElementPath','xml.etree.ElementTree','xml.parsers.expat','xml.sax.expatreader','xml.sax.handler','xml.sax.saxutils','xml.sax.xmlreader','xml.sax._exceptions']
for(var i=0, _len_i = pylist.length; i < _len_i;i++) $B.stdlib[pylist[i]]=['py']

var pkglist=['browser','collections','encodings','html','http','importlib','logging','multiprocessing','multiprocessing.dummy','pydoc_data','test','ui','unittest','unittest.test','unittest.test.testmock','urllib','xml','xml.dom','xml.etree','xml.parsers','xml.sax']
for(var i=0, _len_i = pkglist.length; i < _len_i;i++) $B.stdlib[pkglist[i]]=['py',true]
})(__BRYTHON__)